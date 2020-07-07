import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';
import CardSerie from '../../components/CardSeries/CardSeries';



export default function Lancamentos() {

    const [series, setSeries] = useState([]);

    async function load() {
        try {
            const resposta = await api.get("/tv/airing_today", api_options());
            setSeries(resposta.data.results);
            console.log(resposta.data.results);
        } catch (erro) {
            console.log(erro);
        }
    }

    useEffect(() => {load();}, []);
    
    return (
        <Fragment>
            <div className="conteudo">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie}/>)}
            </div>
        </Fragment>
    );
}