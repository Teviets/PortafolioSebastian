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

import { LuPlus } from "react-icons/lu";

import Constant from '../../assets/Constant/Constant'

export default function Modal({posfix_name}) {
    let info = Constant.Proyects[posfix_name] || Constant.Proyects.More;

    return (
        <DialogRoot
            key="center"
            placement="center"
            size="xl"
            motionPreset="slide-in-bottom">
                <DialogTrigger asChild>
                    <Button variant="subtle" colorPalette="blue" flex="1">
                        <LuPlus />
                        More info
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div id='image-modal'>
                            <Image
                                id='image-content'
                                src={info.Image}
                                alt={info.Title}
                                height={250}
                                fit="cover"
                            />
                        </div>
                        
                        <DialogTitle>{info.Title}</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <div id='content-modal'>
                            <p style={{whiteSpace: "pre-line"}}>
                                {info.CompleteDescription}
                            </p>
                            <span>
                                prueba
                            </span>
                        </div>
                    </DialogBody>
                    <DialogCloseTrigger />
                </DialogContent>
        </DialogRoot>
    )
}
