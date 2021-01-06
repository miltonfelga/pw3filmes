import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';
import CardSerie from '../../components/CardSeries/CardSeries';

export default function EmAlta(props) {

    const [series, setSeries] = useState([]);
    let { genre }= props.match.params
    console.log('este é o numero ' + genre)
    console.log(useState)


    
    //faça um afunção que receba o novo valor para a url da api e então regarregue todos os dados da tela


    let urlAPI = "discover/tv/" + "?with_genres=" + genre;

    async function load() {
        try {
            let newGenere = genre;
            //const resposta = await api.get("discover/tv/", api_options(), "?with_genres=18");
            //const resposta = await api.get("discover/tv/", api_options(), "?with_genres=18");
            const resposta = await api.get(urlAPI, api_options());
            setSeries(resposta.data.results);
            console.log(resposta)
        } catch (erro) {
            console.log(erro);
        }
    }

    if(newGenere !== props.match.params) {
        genre = props.match.params;
        load();
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