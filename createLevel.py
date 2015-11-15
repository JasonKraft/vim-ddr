import pygame
import sys
import time
import math

pygame.init()
BLACK = (0,0,0)
RED = (255,255,255)
WIDTH = 1280
HEIGHT = 1024
windowSurface = pygame.display.set_mode((WIDTH, HEIGHT), 0, 32)
startTime = 0
currentTime = 0
started = True
windowSurface.fill(BLACK)
gameLoop = True

f = open("notes.txt", 'w')

def calculateMS():
	return math.trunc((time.time() - startTime) * 1000)

def writeToFile(sumNum, timeTaken):
	f.write("[" + str(sumNum) + "," + str(timeTaken) + "]," + "\n")

f.write("[")
while gameLoop:
	if(started):
		startTime = time.time()
		started = False
	events = pygame.event.get()
	for event in events:
		if(event.type == pygame.KEYDOWN):
			if(event.key == pygame.K_h):
				writeToFile(1, calculateMS())
			elif(event.key == pygame.K_j):
				writeToFile(2, calculateMS())
			elif(event.key == pygame.K_k):
				writeToFile(4, calculateMS())
			elif(event.key == pygame.K_l):
				writeToFile(8, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_j):
				writeToFile(3, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_k):
				writeToFile(5, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_l):
				writeToFile(9, calculateMS())
			elif(event.key == pygame.K_j and event.key == pygame.K_k):
				writeToFile(6, calculateMS())
			elif(event.key == pygame.K_j and event.key == pygame.K_l):
				writeToFile(10, calculateMS())
			elif(event.key == pygame.K_k and event.key == pygame.K_l):
				writeToFile(12, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_j and event.key == pygame.K_k):
				writeToFile(7, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_j and event.key == pygame.K_l):
				writeToFile(11, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_k and event.key == pygame.K_l):
				writeToFile(13, calculateMS())
			elif(event.key == pygame.K_j and event.key == pygame.K_k and event.key == pygame.K_l):
				writeToFile(14, calculateMS())
			elif(event.key == pygame.K_h and event.key == pygame.K_j and event.key == pygame.K_k and event.key == pygame.K_l):
				writeToFile(15, calculateMS())
			elif(event.key == pygame.K_c):
				gameLoop = False

f.write("]")
f.close()