import { gray, grayA, mauve, violet, violetA } from "@radix-ui/colors";
import { Box } from "components/atoms/Box";
import Button from "components/atoms/Button";
import WithNav from "layouts/WithNav";
import { styled } from "stitches.config";
import {
    Form,
    FormError,
    FormInput,
    FormLabel,
    FormReset,
    FormSubmit,
    useFormState,
  } from "ariakit/form";
import { axiosInstance } from "axios.config";


const Input = styled(FormInput, {
    all: 'unset',
    width: 'min(400px, 80vw)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    height: 35,
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet12,
    backgroundColor: grayA.grayA3,
    gap: 5,
    // boxShadow: `0 0 0 1px ${blackA.blackA9}`,
    '&:focus': { boxShadow: `0 0 0 2px ${violetA.violetA9}` },
    '&::placeholder': {
        color: mauve.mauve9
    }
});


const Error = styled(FormError, {
    color:"#111",
    width:"100%",
    height:35
})


const Label = styled('label', {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    color: violet.violet12
})


export default function PostTransaction() {

    const form = useFormState({ defaultValues: { } });

    const handlePost = async (values) => {
        try{
            let res = await axiosInstance.post('transaction', values)
            alert("Add transaction success")
        }
        catch(e){
            alert(e.response?.data.error)
        }
        
        
    }

    form.useSubmit(() => {


       handlePost(form.values)
       
    });

    return <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
       
        <Form state={form} >
        <Box css={{ display: "inline-flex", flexDirection: "column", gap: 10, padding: 10 }}>
            <h3 style={{color: violet.violet11}}>Create new transaction</h3>
            <Label>
                From address
                <br />
                <Input name={form.names.from} placeholder='source wallet address'></Input>
            </Label>
            <Label>
                To address
                <br />
                <Input name={form.names.to} placeholder='destination wallet address'></Input>
            </Label>
            <Label>
                Signature
                <br />
                <Input name={form.names.sign}  placeholder='source wallet signature private key'></Input>
            </Label>
            <Label>
                Amount
                <br />
                <Input name={form.names.amount} type='number' placeholder='from address'></Input>
            </Label>
           
           <br/>
                <Button css={{width:"100%"}} type='submit'>Post transaction</Button>
                
                </Box>
      
            </Form>
      
    </Box>
}

PostTransaction.getLayout = (page) => {
    return <WithNav>
        {page}
    </WithNav>
}