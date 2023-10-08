#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep 15 15:08:49 2023

@author: user
"""

import pika


connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
messages =[]

def callback(ch, method, properties, body):
     print(" [x] Received %r" % body)
     messages.append(body)
     print(f"Received {len(messages)} messages")

channel.basic_consume(queue='hello',auto_ack=True,on_message_callback=callback)
print(' [*] Waiting for messages. To exit press CTRL+C')


channel.start_consuming()
    
    