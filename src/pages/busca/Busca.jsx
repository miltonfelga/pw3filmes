import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import CardSerie from '../../components/CardSeries/CardSeries';

export default function Busca(props) {

    const [series, setSeries] = useState([]);
    const urlAPI = "https://api.themoviedb.org/3/search/tv/" +
                    props.location.search +
                    "&api_key=c0d8598e0d3c812f79b7ca74fde1a95c&language=pt-BR";
    async function load() {
        try {
            const resposta = await axios.get(urlAPI);
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