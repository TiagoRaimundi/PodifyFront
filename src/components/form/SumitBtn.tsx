import { useFormikContext } from 'formik';
import React, { FC } from 'react';
import { Button } from 'react-native';

interface Props {
    title: string;
}

const SubmitBtn: FC<Props> = ({ title }) => {
    const { handleSubmit } = useFormikContext();

    // Função intermediária para ignorar o evento de toque nativo
    const handlePress = () => {
        handleSubmit();
    };

    return <Button onPress={handlePress} title={title} />;
}

export default SubmitBtn;
