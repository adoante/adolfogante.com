"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@headlessui/react";

export const MotionLink = motion.create(Link);
export const MotionButton = motion.create(Button);
