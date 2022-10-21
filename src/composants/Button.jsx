 class app extends Button {
   state = {
     show: false
   };
 toggle= () => {
   let res = this.state.show;
   this.setState({ show: !res });
 };
render() {
  return(
   <button onClick={ this.toggle }> </button>
  {
    this.state.show ? (<div className="Dropdown-open"></div>) : null
  }
   );
     }
