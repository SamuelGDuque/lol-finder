import axios from 'axios';

const apidragon = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn',
});

var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};

export const loadChampions = async(url, setChampions,setLoading,qtd = 3) => { 
  try {
    setLoading(true);
    const response = await apidragon.get(url)
    const list = response.data.data 
    const array_champions = []

    Object.keys(list).forEach(function(item){
      let champion = {
        'id' : item,
        'info' : list[item]
      }
      array_champions.push(champion)
    });
    setChampions(array_champions)
  }
  finally {
    setLoading(false);
  }
}

export default apidragon;