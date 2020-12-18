import React, { useState, useEffect } from 'react';
import DetailComponent from '../../components/DetailComponent';
import { getData } from '../../service';
import { selectOneResource } from '../../service/queries';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MapComponent from '../../components/MapComponent';

const DetailContainer = ({ uri,setShowDetails }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [latitude, setLatitude] = useState(undefined);
    const [longitude, setLongitude] = useState(undefined);    
    const [label, setLabel] = useState(undefined);    
    useEffect(async () => {
        const results=[];
        let lat, lont,_label;
        const data = await getData(selectOneResource(uri));
        data.results.bindings.forEach(e => {
            results.push({predicate: e.predicate.value, object: e.object.value});
            if (e.predicate.value === "http://www.w3.org/2003/01/geo/wgs84_pos#lat"){
                lat = parseFloat(e.object.value);
            }
            if (e.predicate.value === "http://www.w3.org/2003/01/geo/wgs84_pos#long"){
                lont = parseFloat(e.object.value);
            }
            if (e.predicate.value === "http://www.w3.org/2000/01/rdf-schema#label"){
                _label = e.object.value;
            }

          });
        setData(results);
        setLongitude(lont);
        setLatitude(lat);
        setLabel(_label);
        setLoading(false);
    }, []);
    const renderReturnButton = () => (
        <Button 
        startIcon={<ArrowBackIcon/>}
        variant="contained"
        color="primary" onClick={() => setShowDetails(false)}
        size="small"
        style={ { marginBottom: '15px' } } 
        >Return</Button>
    );
    const renderMap = () => (
        <div style={{ maxWidth: '500px', margin: '0 auto'}}>
            <MapComponent  latitude={latitude}  longitude={longitude} label={label} />
        </div>
    );
    return (
        <div>
            { renderReturnButton() }
         { loading ?(<h5>Loading ...</h5>) :
            <div>
                <DetailComponent uri={uri} setShowDetails={setShowDetails} data={data} />
                <div>
                    <h4>See on maps</h4>
                </div>
                { renderMap() }
            </div>
        } 
        </div>
    );
};

export default DetailContainer;