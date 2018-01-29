# CPFValidate

Um simples script para gerar e valida CPF

## Instalação

1. Download de script `CPF.js`
2. Adicione o mesmo aos scripts de sua pagina 

```javascript
<script type="text/javascript" src="CPF.js"></script>
```

## Uso

### Validar

```javascript
// CPF.validate("cpf desejado");
CPF.validate('270.143.855-18'); // true
CPF.validate('067540186-07'); // true
CPF.validate('86116576672'); // true
```

### Gerar

```javascript
CPF.generate(); // '27014385518'
CPF.generate(true); // '861.165.766-72'
```

### Formatar

```javascript
CPF.format('27014385518'); // 270.143.855-18
```