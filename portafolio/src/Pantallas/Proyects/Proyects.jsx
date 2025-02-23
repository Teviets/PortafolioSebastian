import React from 'react';
import { useState } from 'react';

import { Card, HStack, Stack, Strong, Text, Image, Badge, Box } from "@chakra-ui/react";

import Modal from '../../componentes/modal/Modal.jsx'

import TerraControl from '../../assets/drawable/TerraControl.png'
import Nasa from '../../assets/drawable/Nasa.png'
import Airbnb from '../../assets/drawable/CopiaAirbnb.png'
import More from '../../assets/drawable/more.jpeg'

import { useLanguage } from '../../componentes/Language/LanguageSelector.jsx';

import './Proyects.css';

import Constant from '../../assets/Constant/Constant'

export default function Proyects() {
    const { language } = useLanguage();

    return (
        <div id='proyects-container'>
            <h2 id='title-proyects'>{Constant[language].Proyects.Title}</h2>
            <div className='grid-proyects'>
                <Card.Root width="105%" borderColor={"fg.muted"}>
                    <Image
                        src={TerraControl}
                        height={250} 
                    />
                    <Card.Body>
                        <HStack mb="6" gap="3">
                            <Stack gap="0">
                                <Text fontWeight="semibold" textStyle="sm">
                                    {Constant[language].Proyects.Position}
                                </Text>
                                <Text color="fg.muted" textStyle="sm">
                                    {Constant[language].Proyects.position_description}
                                </Text>
                            </Stack>
                        </HStack>
                        <Card.Description textAlign={"justify"}>
                            <Strong color="fg">{Constant[language].Proyects.Description} </Strong>
                            {Constant[language].Proyects.TerraControl.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="TerraControl" />
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="105%" borderColor={"fg.muted"}>
                    <Image
                        src="https://i.redd.it/rq5yp73l8nic1.png"
                        alt="Green double couch with wooden legs"
                        height={250}
                    />
                    <Card.Body>
                        <HStack mb="6" gap="3">
                        <Stack gap="0">
                            <Text fontWeight="semibold" textStyle="sm">
                            {Constant[language].Proyects.Position}
                            </Text>
                            <Text color="fg.muted" textStyle="sm">
                            {Constant[language].Proyects.position_description}
                            </Text>
                        </Stack>
                        </HStack>
                        <Card.Description textAlign={"justify"}>
                        <Strong color="fg">{Constant[language].Proyects.Description} </Strong>
                        {Constant[language].Proyects.Pacifiko.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="Pacifiko" />
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="105%" borderColor={"fg.muted"}>
                    <Image
                        src={Airbnb}
                        height={250}
                        objectFit={"cover"}
                        objectPosition={"left"}
                    />
                    <Card.Body>
                        <HStack mb="6" gap="3">
                        <Stack gap="0">
                            <Text fontWeight="semibold" textStyle="sm">
                            {Constant[language].Proyects.Position}
                            </Text>
                            <Text color="fg.muted" textStyle="sm">
                            {Constant[language].Proyects.position_student}
                            </Text>
                        </Stack>
                        </HStack>
                        <Card.Description textAlign={"justify"}>
                        <Strong color="fg"> {Constant[language].Proyects.Description} </Strong>
                        {Constant[language].Proyects.Airbnb.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="Airbnb" />
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="105%" borderColor={"fg.muted"}>
                    <Image
                        src={Nasa}
                        height={250}
                        objectFit={"cover"}
                        objectPosition={"left"}
                    />
                    <Card.Body>
                        <HStack mb="6" gap="3">
                        <Stack gap="0">
                            <Text fontWeight="semibold" textStyle="sm">
                            {Constant[language].Proyects.Position}
                            </Text>
                            <Text color="fg.muted" textStyle="sm">
                            {Constant[language].Proyects.position_front}
                            </Text>
                        </Stack>
                        </HStack>
                        <Card.Description textAlign={"justify"}>
                        <Strong color="fg">{Constant[language].Proyects.Description} </Strong>
                        {Constant[language].Proyects.Nasa.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="Nasa" />
                    </Card.Footer>
                </Card.Root>
            </div>

            {/* Contenedor para que ocupe toda la fila */}
            <div className="full-row-card">
                <Card.Root flexDirection="row" overflow="hidden" maxW="100%" height={300} borderColor={"fg.muted"}>
                    <Image
                        objectFit="cover"
                        src={More}
                        alt="Caffe Latte"
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2">{Constant[language].Proyects.OtherProyects}</Card.Title>
                            <Card.Description className='description' textAlign={"justify"}>
                                <p textAlign={"justify"}>
                                    {Constant[language].Proyects.More.Description}
                                </p>
                            </Card.Description>
                            <HStack mt="4">
                                {Object.entries(Constant[language].Proyects.More.Proyects).map(([key, value]) => {
                                    return <Badge key={key}>{value.Title}</Badge>;
                                })}
                            </HStack>
                        </Card.Body>
                        <Card.Footer>
                            <Modal posfix_name="More" />
                        </Card.Footer>
                    </Box>
                </Card.Root>
            </div>
        </div>
    );
}
