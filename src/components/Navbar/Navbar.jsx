import './Navbar.css';
const navOptions = ["About","Tools","Experience","Projects","Resume"];
function NavOption(props){
  return <p>{props.navItem}</p>
}
function Navbar(){
  var name = 'Sawani Saxena';
  return (
    <div className='navbar_container'>
      <div className='navbar_left'>
      {name}
      </div>
      <div className="navbar_right">
        {navOptions.map(function(item,index){
          return <NavOption key = {item} navItem={item}></NavOption>
        })}
      </div> 
    </div>
  )
}
export default Navbar;