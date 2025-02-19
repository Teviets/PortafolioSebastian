import React from 'react';
import { useState } from 'react';

import { Card, HStack, Stack, Strong, Text, Image, Badge, Box } from "@chakra-ui/react";

import Modal from '../../componentes/modal/Modal.jsx'

import TerraControl from '../../assets/drawable/TerraControl.png'
import Nasa from '../../assets/drawable/Nasa.png'
import Airbnb from '../../assets/drawable/CopiaAirbnb.png'
import More from '../../assets/drawable/more.jpeg'

import './Proyects.css';

import Constant from '../../assets/Constant/Constant'

export default function Proyects() {

    return (
        <div id='proyects-container'>
            <h2 id='title-proyects'>Proyects</h2>
            <div className='grid-proyects'>
                <Card.Root width="105%">
                    <Image
                        src={TerraControl}
                        height={250} 
                    />
                    <Card.Body>
                        <HStack mb="6" gap="3">
                            <Stack gap="0">
                                <Text fontWeight="semibold" textStyle="sm">
                                    Position
                                </Text>
                                <Text color="fg.muted" textStyle="sm">
                                    Full stack Developer jr.
                                </Text>
                            </Stack>
                        </HStack>
                        <Card.Description>
                            <Strong color="fg">Responsabilities </Strong>
                            {Constant.Proyects.TerraControl.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="TerraControl" />
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="105%">
                    <Image
                        src="https://i.redd.it/rq5yp73l8nic1.png"
                        alt="Green double couch with wooden legs"
                        height={250}
                    />
                    <Card.Body>
                        <HStack mb="6" gap="3">
                        <Stack gap="0">
                            <Text fontWeight="semibold" textStyle="sm">
                            Position
                            </Text>
                            <Text color="fg.muted" textStyle="sm">
                            Full stack Developer jr.
                            </Text>
                        </Stack>
                        </HStack>
                        <Card.Description>
                        <Strong color="fg">Responsabilities </Strong>
                        {Constant.Proyects.Pacifiko.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="Pacifiko" />
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="105%">
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
                            Position
                            </Text>
                            <Text color="fg.muted" textStyle="sm">
                            Student
                            </Text>
                        </Stack>
                        </HStack>
                        <Card.Description>
                        <Strong color="fg">Responsabilities </Strong>
                        {Constant.Proyects.Airbnb.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="Airbnb" />
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="105%">
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
                            Position
                            </Text>
                            <Text color="fg.muted" textStyle="sm">
                            Full stack Developer jr.
                            </Text>
                        </Stack>
                        </HStack>
                        <Card.Description>
                        <Strong color="fg">Responsabilities </Strong>
                        {Constant.Proyects.Nasa.Description}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <Modal posfix_name="Nasa" />
                    </Card.Footer>
                </Card.Root>
            </div>
            <Card.Root flexDirection="row" overflow="hidden" maxW="9000" height={300}>
                <Image
                objectFit="cover"
                src={More}
                alt="Caffe Latte"
                />
                <Box>
                <Card.Body>
                    <Card.Title mb="2">Other proyects</Card.Title>
                    <Card.Description>
                    <Text color="fg.muted">
                        <p style={{ whiteSpace: "pre-line" }}>
                            {Constant.Proyects.More.Description}
                        </p>
                    </Text>
                    </Card.Description>
                    <HStack mt="4">
                    <Badge>Table Trail</Badge>
                    <Badge>Chat XMPP</Badge>
                    <Badge>Cosita Mia</Badge>
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Modal posfix_name="More" />
                </Card.Footer>
                </Box>
            </Card.Root>
        </div>
    )
}
