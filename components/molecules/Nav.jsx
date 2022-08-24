import { violet } from "@radix-ui/colors";
import Link from "next/link";
import { styled } from "stitches.config";


const NavContainer = styled('nav', {
    width:"100vw",
    display:"flex"
})


const StyledLink = styled('div', {
    padding:"1em",
    cursor:"pointer",
    color: violet.violet12
})




export default function Nav(){
    return <NavContainer>
      
        <Link href='/'>
        <StyledLink>
            Eridium
            </StyledLink>
        </Link>
      
        <Link href='/create-wallet'>
        <StyledLink>
            Create Wallet
            </StyledLink>
        </Link>

        <Link href='/post-transaction'>
        <StyledLink>
            New transaction
            </StyledLink>
        </Link>

        <Link href='/mine'>
        <StyledLink>
            Mine
            </StyledLink>
        </Link>
    </NavContainer>
}