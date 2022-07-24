import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../../../assets/icons/body-part.png';
import TargetImage from '../../../assets/icons/target.png';
import EquipmentImage from '../../../assets/icons/equipment.png';

const Detail = ({ exerciseDetails }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]
    return (
        <Stack gap="60px" sx={{ flexDirection: { md: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} Loading="lazy" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant="h3" textTransform='capitalize'>
                    {name}
                </Typography>
                <Typography variant="h6" sx={{pr: {lg: '20%'}}}>
                    Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
                </Typography>
                {
                    extraDetails.map(item => (
                        <Stack key={item.name} direction="rpw" gap="24px" alignItems="center">
                            <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                                <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}} />
                            </Button>
                            <Typography variant='h5' textTransform="capitalize">
                                {item.name}
                            </Typography>
                        </Stack>
                    )
                    )
                }
            </Stack>
        </Stack>
    );
};

export default Detail;