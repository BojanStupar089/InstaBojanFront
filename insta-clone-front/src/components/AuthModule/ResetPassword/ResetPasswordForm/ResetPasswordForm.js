import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { Input } from "../../../UtilModule/Input/Input"

const schema = yup.object().shape({
    password: yup.string().min(8, "Lozinka mora imati minimum 8 karaktera!").required("Obavezno polje"),
    repeatedPassword: yup.string()
    .test('passwords-match', 'Lozinke se ne poklapaju!', function(value){
      return this.parent.password === value
    }),
});

export const ResetPasswordForm = ({onSubmit}) => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    return <form className="rp-container" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-2">Reset password</h2>

        <Input type={"password"} className="form-control" placeholder="Password" name="password" register={register} errors={errors}/>
        
        <Input type={"password"} className="form-control" placeholder="Repeat password" name="repeatedPassword" register={register} errors={errors}/>
        
        <div className="form-group">
            <button type="button submit" className="btn btn-primary w-100">Confirm</button>
        </div>
        <hr/>
    </form>
}