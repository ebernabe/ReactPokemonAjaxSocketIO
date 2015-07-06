import pokemons from "./pokemons"

export default{
	pokemons:{
		find: function(callback){
			setTimeout(()=>{
				callback(pokemons)
			},0)
		}
	}
}