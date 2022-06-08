import Button from "components/atoms/Button";
import WithNav from "layouts/WithNav"
import { styled } from "stitches.config";
import {
    Dialog,
    DialogDismiss,
    DialogHeading,
    useDialogState,
} from "ariakit/dialog";
import { gray, grayA, violet } from "@radix-ui/colors";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Box } from "components/atoms/Box";
import { CopyIcon } from "@radix-ui/react-icons";
import { axiosInstance } from "axios.config";
import { useState } from "react";


const Input = styled('input', {
    all: 'unset',
    width: 200,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    height: 35,
    fontSize: 15,
    lineHeight: 1,
    color: 'white',
    // backgroundColor: blackA.blackA5,
    // boxShadow: `0 0 0 1px ${blackA.blackA9}`,
    '&:focus': { boxShadow: `0 0 0 2px black` },
});


const FlexRow = styled('div', {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:5
})

const StyledDialog = styled(Dialog, {
    'max-width': 'max(500px, 60vw)',
    'max-height': 'max(500px, 60vw)',
    'transform': 'translate(-50%, -50%)',
    'position': 'fixed',
    'top': '50%',
    'left': '50%',

    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '1rem',
    overflow: 'auto',
    borderRadius: '0.5rem',
    borderColor:gray.gray5,
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: "white",
    padding: '1em',

    boxShadow:"0 2px 10px rgba(0,0,0,0.2)",
    // filter: "drop-shadow(0 16px 24px rgba(0, 0, 0, 15%))",
    '&:focus': { boxShadow: `0 2px 10px rgba(0,0,0,0.2), 0 0 0 2px ${grayA.grayA2}`, outline:"none" },
})

export default function CreateWallet() {
    const dialog = useDialogState();

    const [data, setData] = useState({})

    const genKeyRequest = async () => {
        const res = await axiosInstance.post('/wallet-create');
        console.log(res)
        setData(res.data)
        dialog.toggle()

    }

    return <div>
        <Button onClick={genKeyRequest}>Generate key pair</Button>
        <StyledDialog state={dialog}>
            <h3 style={{color:violet.violet9}}>New key pair created</h3>
            <span style={{color:violet.violet12}}>It is important to save your private key. </span>
            <Box css={{
                display:"grid",
                gridTemplateColumns:"1fr",
                
                
            }}>
                <Box>
                    <h4 style={{color:violet.violet12}}>Public key (wallet address): </h4>
                    <div css={{wordWrap:"break-word"}}>{data.publicKey}</div>
          
                        
                    <CopyToClipboard text={data.publicKey} onCopy={() => alert('Copied to clipboard')}>
                        <CopyIcon/>
                    </CopyToClipboard>
    
                </Box>
                <Box css={{wordWrap:"break-word",}}>
                    <h4 style={{color:violet.violet12}}>Private key: </h4>
                    <div css={{wordWrap:"break-word"}}>{data.privateKey}</div>
                    <CopyToClipboard text={data?.privateKey} onCopy={() => alert('Copied to clipboard')}>
                        <CopyIcon/>
                    </CopyToClipboard>
                </Box>
            </Box>
           
        </StyledDialog>
    </div>
}


CreateWallet.getLayout = (page) => {
    return <WithNav>
        {page}
    </WithNav>
}