import chefIcon from '../assets/chef.png'
export default function Header (){
    return (
        <>
            <header className='chef-header'>
                <a href='/' className='chef-logo'>
                    <img src={chefIcon} alt='Chef Claudo'/>
                    <span className='chef-title'>Chef Claude</span>
                </a>
                
            </header> 
        </>
    )
}