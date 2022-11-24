import bottom from '../../assets/bottom.png';

//Itens da Lista 1
import board from '../../assets/Itens/board.png';
import esp from '../../assets/Itens/esp32.png';
import sct from '../../assets/Itens/sct013.png';
import zmpt from '../../assets/Itens/zmpt101b.png';
import hlk from '../../assets/Itens/hlk5m03.png';
import capacitores from '../../assets/Itens/capacitor.png';
import resistores from '../../assets/Itens/resistor.png';

//Itens da Lista 2
import esquematico from '../../assets/Itens/esquematico.png';
import bom from '../../assets/Itens/bom.png';
import croqui from '../../assets/Itens/croqui.jpg';
import modelo2d from '../../assets/Itens/modelo2d.jpg';
import modelo3d from '../../assets/Itens/modelo3d.jpg';

const placa = {
    topo:{
        nome: "E-SURV",
        subNome: "Smart Consumption",
        imagem: bottom
    },
    monitoramento:{
        titulo: "Monitor Casa - Thiago",
        RS: "Consumo em R$",
        valorRS: "R$ 0,00",
        kWh: "Consumo em kWh",
        valorkWh: "0kWh",
        tarifa: "Tarifa",
        bandeira: "Branca",
        corrente: "Corrente",
        valorC: "1A",
        potencia: "Potência",
        valorP: "127w",
        tensao: "Tensão",
        valorT: "127v"
    },
    itens: {
        titulo: "Placa E-SURV",
        imagem: board,
        placa: [
            {
                nome: "NodeMCU ESP-32",
                imagem: esp
            },
            {
                nome: "Sensor de Corrente - SCT013",
                imagem: sct
            },
            {
                nome: "Sensor de Tensão - ZMPT101B",
                imagem: zmpt
            },
            {
                nome: "Mini-Fonte 3,3V - HLK5M03",
                imagem: hlk
            },
            {
                nome: "Capacitores - 10μF",
                imagem: capacitores
            },
            {
                nome: "Resistores - 10k e 33Ω",
                imagem: resistores
            }
        ]
    },
    desenho: {
        titulo: "Esquemas Tecnicos E-SURV",
        tecnico: [
            {
                nome: "Esquematico",
                imagem: esquematico
            },
            {
                nome: "BOM - Bill of Materials",
                imagem: bom
            },
            {
                nome: "Croqui - Placa",
                imagem: croqui
            },
            {
                nome: "Modelo 2D - Placa",
                imagem: modelo2d
            },
            {
                nome: "Modelo 3D - Placa",
                imagem: modelo3d
            }
        ]
    }
}

export default placa;