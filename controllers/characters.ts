import { Request, Response } from "express";
import { isAxiosError } from 'axios';

import ramApi from '../api/ramApi';
import { ApiResponse, Characters } from '../interfaces/index';

type Data =
    | { message: string }
    | Characters

export const getHumans = async (req: Request, res: Response<Data>) => {

    const { page = 1 } = req.query;

    const query = `
    {
        characters(filter: { species: "Human" },page:${page}){
          info{
            count
            pages
            next
            prev
          }
          results{
            id
            name
            species
            image
            status
          }
        }
      }`;

    try {
        const { data } = await ramApi.post<ApiResponse>('/graphql', { query })

        //Filtrado para === human, ya que la query 'filter: { species: "Human" }' tambien nos devuelve humanoides.
        const humans = data.data.characters.results.filter(char => char.species === "Human");

        res.status(200).json({
            info: data.data.characters.info,
            results: humans
        })
    } catch (error) {
        if (isAxiosError(error)) {
            return res.status(400).json({
                message: error.message
            })
        }
        console.log(error);
        res.status(400).json({
            message: 'Error del servidor, revisar logs'
        })

    }

}