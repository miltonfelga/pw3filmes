import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';
import CardSerie from '../../components/CardSeries/CardSeries';

export default function Busca(props) {

    const [series, setSeries] = useState([]);
    const urlAPI = "search/tv/" + props.location.search;
    
    async function load() {
        try {
            const resposta = await api.get(urlAPI, api_options());
            setSeries(resposta.data.results);
        } catch (erro) {
            console.log(erro);
        }
    }

    useEffect(() => {load();}, [props.location.search]);

    return (
        <Fragment>
            <div className="conteudo">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie}/>)}
            </div>
        </Fragment>
    );
}