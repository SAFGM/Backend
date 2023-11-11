import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Lead = db.define('t_lead', {
    
    cel_lead: { type: DataTypes.STRING},
    nm_lead: {type:  DataTypes.STRING },
    dt_nasc: { type:  DataTypes.DATE },
    escritura_imovel: { type:  DataTypes.STRING },
    fin_aberto: { type: DataTypes.STRING },
    imp_renda: { type:  DataTypes.STRING },
    ind_corretor: { type: DataTypes.STRING },
    local: {  type:DataTypes.STRING },
    nm_corretor: { type: DataTypes.STRING },
    cel_corretor: { type: DataTypes.STRING },
    dt_indicacao: {  type:DataTypes.DATE },
    qt_parcela: {  type:DataTypes.INET },
    renda_atual: { type: DataTypes.DECIMAL },
    sinal: { type: DataTypes.DECIMAL },
    situacao_imovel: { type: DataTypes.STRING },
    tp_imovel: { type: DataTypes.STRING },
    vl_parcela: { type: DataTypes.DECIMAL },
    fgts: { type: DataTypes.DECIMAL },
    endereco_id_fk: { type: DataTypes.STRING },
    orig_renda: { type: DataTypes.STRING },
    id_conjuge_fk: { type: DataTypes.NUMBER },
    status_lead: { type: DataTypes.STRING }
    }, {
    createdAt: false,
    updatedAt: false
});

export default Lead;