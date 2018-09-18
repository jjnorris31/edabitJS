def sqrt(x):
    if( x < 0):
        return None
        
    ultimo_intento = x / 2.0
    while True:
        intento_aux = (ultimo_intento + x / ultimo_intento) / 2
        if abs(intento_aux - ultimo_intento) < .0001:
            return int(intento_aux)
        ultimo_intento = intento_aux

print(sqrt(-10))
