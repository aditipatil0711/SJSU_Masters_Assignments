#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep 15 15:08:49 2023

@author: user
"""
import asyncio
from websockets.sync.client import connect

def hello():
    with connect("ws://localhost:8765") as websocket:
    	for i in range(1, 10000):
    		websocket.send("Request Numbeer [" + str(i) + "] Waiting for next number...")
    		message = websocket.recv()
    		print(f"Received: {message}")

hello()
