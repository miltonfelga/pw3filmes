import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';
import CardSerie from '../../components/CardSeries/CardSeries';

export default function EmAlta(props) {

    const [series, setSeries] = useState([]);
    let genero = props.match.params.genre

    async function load() {
        try {
            const urlAPI = ("discover/tv/?with_genres=" + genero);
            const resposta = await api.get(urlAPI, api_options());
            setSeries(resposta.data.results);
            console.log(resposta.data.page)
            //console.log(resposta)
        } catch (erro) {
            //console.log(erro);
        }
    }

    useEffect(() => {load()}, [props.match.params.genre]);

    return (
        <Fragment>
            <div className="conteudo">
                {series.map((serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
        </Fragment>
    );
}