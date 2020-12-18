import React, { useState, useEffect } from 'react';
import DetailComponent from '../../components/DetailComponent';
import { getData } from '../../service';
import { selectOneResource } from '../../service/queries';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const DetailContainer = ({ uri,setShowDetails }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]); 
    useEffect(async () => {
        const results=[];
        const data = await getData(selectOneResource(uri));
        data.results.bindings.forEach(e => {
            results.push({predicate: e.predicate.value, object: e.object.value});
          });
        setData(results);
        setLoading(false);
    }, []);
    return (
        <div>
            <Button 
                startIcon={<ArrowBackIcon/>}
                variant="contained"
                color="primary" onClick={() => setShowDetails(false)}
                size="small"
                style={ { marginBottom: '15px' } } 
                >Return</Button>
         { loading ?(<h5>Loading ...</h5>) :
            <DetailComponent uri={uri} setShowDetails={setShowDetails} data={data} />
        } 
        </div>
    );
};

export default DetailContainer;