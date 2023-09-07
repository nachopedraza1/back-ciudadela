"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHumans = void 0;
const axios_1 = require("axios");
const ramApi_1 = __importDefault(require("../api/ramApi"));
const getHumans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const { data } = yield ramApi_1.default.post('/graphql', { query });
        //Filtrado para === human, ya que la query 'filter: { species: "Human" }' tambien nos devuelve humanoides.
        const humans = data.data.characters.results.filter(char => char.species === "Human");
        res.status(200).json({
            info: data.data.characters.info,
            results: humans
        });
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error)) {
            return res.status(400).json({
                message: error.message
            });
        }
        console.log(error);
        res.status(400).json({
            message: 'Error del servidor, revisar logs'
        });
    }
});
exports.getHumans = getHumans;
//# sourceMappingURL=characters.js.map