const scrollToId =(id:string) =>{
  const el = document.getElementById(id);
  if (id){
    el?.scrollIntoView({behavior:'smooth', block:'start'})
  }
}
export default scrollToId

