import { FormFieldView, InputText, InputTextTitle, InputTextView, SignUpView } from "./style";
import { MaskedTextInput } from "react-native-mask-text";
import { useForm, Controller, FieldError } from "react-hook-form";
import { View, Button } from "react-native";

interface signUpProps {
    name: string
    email: string;
    age: string;
    cpf: string;
}

export default function SignUp() {
    const {control, handleSubmit, formState: { errors }, } = useForm<signUpProps>({
        defaultValues: {
            name: 'Iago',
            email: 'iagocesar@ejcm.com.br',
            age: '23',
            cpf: '27891627002'
        }
    }); //27891627002

    async function onSubmit (data: any) {
        console.log(data);
    }

    function verifyFieldError(fieldError: FieldError | undefined) {
        if(fieldError?.message) return true;
        else return false;
    }

    return (
        <SignUpView>
            <InputTextView >
                <FormFieldView error={verifyFieldError(errors.cpf)}>
                    <InputTextTitle error={verifyFieldError(errors.cpf)}>Digite seu CPF:</InputTextTitle>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Campo obrigatório',
                            validate: (value) => {
                                let soma = 0;
                                const valorSeparado = value.split('');
                                valorSeparado.forEach((valor: string) => soma += parseInt(valor))
                                return (soma % 11 === 0) || 'CPF tem que ser um múltplo de 11'
                            }
                        }}
                        name="cpf"
                        render={({ field: { onChange, value } }) => {
                            return <MaskedTextInput
                                value={value} // Valor passado para o componente
                                onChangeText={(valorMascarado, valorBruto) => onChange(valorBruto)} // Função que atualiza o valor conforme ele é alterado
                                keyboardType="numeric"
                                placeholder="000.000.000-00"
                                mask={"999.999.999-99"}
                            />
                        }}
                    />
                </FormFieldView>

                <View style={{width: '90%', height: '2%', marginTop: 20, marginBottom: 20, backgroundColor: 'gray'}}/>

                <FormFieldView error={verifyFieldError(errors?.name)}>
                    <InputTextTitle error={verifyFieldError(errors?.name)}>Digite seu nome:</InputTextTitle>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Campo obrigatório',
                        }}
                        name="name"
                        render={({ field: { value, onChange } }) =>
                            <InputText
                                onChange={onChange}
                                value={value}
                                placeholder="Ana Castela"
                            />
                        }
                    />
                </FormFieldView>

                <View style={{width: '90%', height: '2%', marginTop: 20, marginBottom: 20, backgroundColor: 'gray'}}/>

                <FormFieldView error={verifyFieldError(errors?.email)}>
                    <InputTextTitle error={verifyFieldError(errors.email)}>Digite seu email</InputTextTitle>
                    <Controller
                        name="email"
                        rules={{
                            required: 'Campo obrigatório',
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Email inválido' }
                        }}
                        control={control}
                        render={({ field: { value, onChange } }) =>
                            <InputText
                                onChange={onChange}
                                value={value}
                                placeholder="example@mail.com"
                            />
                        }
                    />
                </FormFieldView>

                <View style={{width: '90%', height: '2%', marginTop: 20, marginBottom: 20, backgroundColor: 'gray'}}/>

                <FormFieldView error={verifyFieldError(errors?.age)}>
                    <InputTextTitle error={verifyFieldError(errors.age)}>Digite sua idade</InputTextTitle>
                    <Controller
                        name="age"
                        rules={{
                            required: 'Campo obrigatório',
                            max: { value: 100, message: 'Idade máxima é 100' },
                            min: { value: 18, message: 'Idade mínima é 18' }
                        }}
                        control={control}
                        render={({ field: { value, onChange } }) =>
                            <InputText
                                onChange={onChange}
                                value={value}
                                placeholder="18-100"
                            />
                        }
                    />
                </FormFieldView>

                <Button title="SUBMETER FORMULÁRIO" onPress={handleSubmit(onSubmit)}/>
            </InputTextView>
        </SignUpView>
    );
}