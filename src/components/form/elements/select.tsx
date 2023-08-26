import { RegisterOptions, UseFormReturn, Controller } from "react-hook-form";
import Select, { Props } from 'react-select';
import styled from "@emotion/styled";

interface SelectInputProps<EntityModel extends Record<string, any>> extends Omit<Props, 'name'> {
    label: string | JSX.Element;
    name: keyof EntityModel;
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel };
    registerOptions?: RegisterOptions<EntityModel, any>
    style?: WrapperProps['style'];
}

const SelectInput = <EntityModel extends Record<string, any>>({
    style,
    label,
    name,
    data,
    options,
    registerOptions
}: SelectInputProps<EntityModel>): JSX.Element => {
    return <Wrapper style={style}>
        <Label>{label}</Label>
        <Controller
            name={name as any}
            control={data.reactHookFormObject.control}
            defaultValue={data.defaultValue[name]}
            render={({ field }) => (
                <Select
                    {...field}
                    className="form-select-input"
                    options={options}
                    styles={{
                        control: (base: any) => ({
                            ...base,
                            backgroundColor: 'black',
                            color: 'white',
                            height: '50px',
                            border: data.reactHookFormObject.formState.errors &&
                                data.reactHookFormObject.formState.errors[name] ? '1px solid red' : '1px solid white',
                        }),
                        valueContainer: (base: any) => ({
                            ...base,
                            color: 'white'
                        }),
                        singleValue: (base: any) => ({
                            ...base,
                            color: 'white'
                        }),
                        menu: (base: any) => ({
                            ...base,
                            backgroundColor: 'black',
                            color: 'white'
                        }),
                        option: (base: any) => ({
                            ...base,
                            backgroundColor: 'white',
                            color: 'black',
                            cursor: 'pointer',
                            marginBlock: '3px',
                            borderRadius: '3px',
                            ':hover': {
                                color: 'blue'
                            }
                        }),
                    }}
                />
            )}
        />
        <Error>
            {
                data.reactHookFormObject.formState.errors &&
                data.reactHookFormObject.formState.errors[name] &&
                data.reactHookFormObject.formState.errors[name]?.message &&
                `${data.reactHookFormObject.formState.errors[name]?.message}`
            }
        </Error>
    </Wrapper>;
};

export default SelectInput;

interface WrapperProps {
    style?: { [key: string]: string | number };
}

const Wrapper = styled.div<WrapperProps>(({ style }) => ({
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    marginTop: '10px',
    marginBottom: '10px',
    ...style,
    '> .form-select-input': {
        width: '100%',
        marginTop: '10px',
        marginBottom: '7px',
        backgroundColor: 'black',
        color: 'white',
    }
}));

const Label = styled.div<any>(() => ({
    width: '100%',
    height: '15px',
    textAlign: 'left',
    fontWeight: 600,
    fontSize: '20px',
    textTransform: 'capitalize',
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
}));

const Error = styled.div(() => ({
    width: '100%',
    height: '15px',
    textAlign: 'left',
    fontWeight: 200,
    fontSize: '12px',
    color: 'red',
    fontFamily: 'sans-serif',
}));