#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep 15 14:42:51 2023

@author: user
"""


import pika


connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='hello')
messages = []
m = 10000
for i in range(m):
    message = f'Message number {i}'
    messages.append(message)
    channel.basic_publish(exchange='', routing_key='hello', body=message)
    print(f" [x] Sent Message number{i}")

print(f"Sent {len(messages)} messages")

connection.close()