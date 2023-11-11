
import { RequestHandler, Request, Response } from "express";
import Lead from "../models/lead";


export const getListLead  : RequestHandler = async (req, res, next) => {

    const listLeads = await Lead.findAll()
    
    res.json(listLeads)
}

export const getListConjuge  : RequestHandler = async (req, res, next) => {
    let id = null
    await Lead.findAll(
        {where:
            {
                id_conjuge_fk: id
            },
        }).then(function (Lead) {
            res.status(200).json(Lead)
                    })
           .catch(function (error) {
                        res.status(500).json(error)
           })
  
}


export const readById : RequestHandler = async (req, res, next) => {

    const { id } = req.params; 
    const todos = await Lead.findByPk(id);
    res.json(todos)
}



export const getIdCelLead: RequestHandler = async (req, res, next) => {
    
    const { cel } = req.params; 
    await Lead.findAll( 
        {where:
        {
            cel_lead:  cel
        }
        }).then(function (Lead) {
            res.status(200).json(Lead)
                    })
           .catch(function (error) {
                        res.status(500).json(error)
           })
}


export const deleteLead= async (req: Request, res: Response) => {
   let id = req.params.id
    await Lead.destroy({
      where: {id: id }
    });
    res.status(200).send('Lead excluido com sucesso.')

};



export const postLead = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Lead.create(body);

        res.json({
            msg: `Lead gerado com sucesso!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Houver um erro, comunique ao soporte`
        })
    }
};


export const updatetLead = async (req: Request, res: Response) => {
    
    const id = req.params.id;
    let lead = await Lead.update(req.body, {where: { id: id}})
    res.status(200).send(lead)

}


