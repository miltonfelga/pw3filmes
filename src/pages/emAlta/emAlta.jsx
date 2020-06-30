import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import CardSerie from '../../components/CardSeries/CardSeries';



export default function EmAlta() {

    const [series, setSeries] = useState([]);

    async function load() {
        try {
            const resposta = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=c0d8598e0d3c812f79b7ca74fde1a95c&language=pt-Br");
            setSeries(resposta.data.results);
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