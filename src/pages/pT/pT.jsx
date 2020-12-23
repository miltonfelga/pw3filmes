import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';
import CardSerie from '../../components/CardSeries/CardSeries';

export default function EmAlta(props) {

    const [series, setSeries] = useState([]);
    const { genre }= props.match.params
    console.log('este é o numero ' + genre)
    console.log(useState)


    const urlAPI = "discover/tv/" + "?with_genres=" + genre;

    async function load() {
        try {
            //const resposta = await api.get("discover/tv/", api_options(), "?with_genres=18");
            //const resposta = await api.get("discover/tv/", api_options(), "?with_genres=18");
            const resposta = await api.get(urlAPI, api_options());
            setSeries(resposta.data.results);
            console.log(resposta)
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