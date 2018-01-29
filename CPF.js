var CPF = {
	getDigit : function(cpf, j){
		var sum = 0, r;
		cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
			sum += parseInt(e) * ((j+2)-(i+1));
		});
		r = sum % 11;
		return (r <2)?0:11-r;
	},
	format : function(cpf){
		if(this.validate(cpf)){
			return cpf.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		}else{
			return null;
		}
	},
	validate : function(cpf){
		var self = this;
		cpf = cpf.replace(/\D/g, '');
		if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
		var result = true;
		[9,10].forEach(function(j){
			var r = self.getDigit(cpf, j);
			if(r != cpf.substring(j, j+1)) result = false;
		});
		return result;
	},
	generate : function(formated){
		var cpf = Array.apply(null, {length: 9}).map(function(){
			return Math.floor(Math.random() * 9);
		}).join('');
		cpf = cpf+this.getDigit(cpf, 9);
		cpf = cpf+this.getDigit(cpf, 10);
		return formated?this.format(cpf):cpf;
	}
}