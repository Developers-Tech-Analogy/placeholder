import Image from 'next/image';
import Link from 'next/link';
const NavBar: React.FC = () => {
    return ( <nav className='absolute top-0 p-8'>
        <Link href='/' passHref={true}>
        <Image src='/Logotech.png' width={140} height={50} alt='logo' />
        </Link>
    </nav> );
}
 
export default NavBar;