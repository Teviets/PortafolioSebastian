import React from 'react'

import './Modal.css'

import { Button, Image } from "@chakra-ui/react"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Card, HStack, Text, Badge, Box } from "@chakra-ui/react";

import { useLanguage } from '../Language/LanguageSelector';

import { LuPlus } from "react-icons/lu";

import Constant from '../../assets/Constant/Constant'

export default function Modal({posfix_name}) {
    const { language } = useLanguage();

    let info = Constant[language].Proyects[posfix_name] || Constant[language].Proyects.More;

    return (
        <DialogRoot
            key="center"
            placement="center"
            size="xl"
            motionPreset="slide-in-bottom">
                <DialogTrigger asChild>
                    <Button variant="subtle" bg="#ff8800" color="white"  flex="1">
                        <LuPlus />
                        More info
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        {posfix_name !== "More" ? (
                            <div id='image-modal'>
                                <Image
                                    id='image-content'
                                    src={info.Image}
                                    alt={info.Title}
                                    height={250}
                                    fit="cover"
                                />
                            </div>
                        ):(
                            <br />
                        )}
                        
                        <DialogTitle>{info.Title}</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        
                        {posfix_name !== "More" ? (
                            <div id='content-modal'>
                                <p style={{whiteSpace: "pre-line"}}>
                                    {info.CompleteDescription}
                                </p>
                                {info.Github ? (
                                    <a href={info.Github} target="_blank">
                                        <Button variant="subtle" bg="#ff8800" color="white" flex="1">
                                            Github
                                        </Button>
                                    </a>
                                ):(
                                    <br />
                                )}

                                {info.URL ? (
                                    <a href={info.URL} target="_blank">
                                        <Button variant="subtle" bg="#ff8800" color="white" flex="1">
                                            Visit
                                        </Button>
                                    </a>
                                ):(
                                    <br />
                                )}
                                
                            </div>
                        ):(
                            <div id='content-modal vertical-more'>
                                {Object.entries(info.Proyects).map(([key, value]) => (
                                    <Card.Root flexDirection="row" overflow="hidden" maxW="9000" height={300}>
                                        <Image
                                            objectFit="contain"
                                            
                                            src={value.Image}
                                            w={300}
                                        />
                                        <Box>
                                        <Card.Body>
                                            <Card.Title mb="2">Other proyects</Card.Title>
                                            <Card.Description>
                                            <Text color="fg.muted">
                                                <p style={{ whiteSpace: "pre-line" }}>
                                                    {value.Description}
                                                </p>
                                            </Text>
                                            </Card.Description>
                                        </Card.Body>
                                        <Card.Footer>
                                            {value.Github ? (
                                                <a href={value.Github} target="_blank">
                                                    <Button variant="subtle" bg="#ff8800" color="white" flex="1">
                                                        Github
                                                    </Button>
                                                </a>
                                            ):(
                                                <br />
                                            )}
                                            
                                            {value.URL ? (
                                                <a href={value.URL} target='_blank'>
                                                    <Button variant="subtle" bg="#ff8800" color="white" flex="1">
                                                        Visit
                                                    </Button>
                                                </a>
                                            ):(
                                                <br />
                                            )}

                                        </Card.Footer>
                                        </Box>
                                    </Card.Root>
                                ))}
                                
                            </div>
                        )}
                    </DialogBody>
                    <DialogCloseTrigger />
                </DialogContent>
        </DialogRoot>
    )
}
