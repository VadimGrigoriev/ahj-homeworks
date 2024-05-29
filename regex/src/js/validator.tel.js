export default class ValidatorTel {
    validateTel(tel) {
        this.tel = tel;
        let countryСode = this.tel.match(/^\+?(\d{1,3})/)[1];    //код страны из номера
        const otherPart = this.tel.replace(countryСode, '');     //остальная часть номера, код страны не берется
        const onlyNumbers = otherPart.replace(/[^\d]/g, '');     //убирает все лишние символы в номере
        countryСode = countryСode === '8' ? '7' : countryСode;   //если код страны = 8, то меняется на 7
        return `+${countryСode}${onlyNumbers}`;                  //вывод номера   
    }
}
