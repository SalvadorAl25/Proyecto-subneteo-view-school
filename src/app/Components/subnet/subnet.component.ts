import { Component, OnInit } from '@angular/core';
import { parse } from 'url';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styles: []
})
export class SubnetComponent implements OnInit {
  idr: string[];
  broad: string[];
  ran1: string[];
  ran2: string[];
  clase: string;
  // Variables para resultados
  NMask: string;
  Npre: number;
  // Variables para demostracion
  demoMask: string;
  demoip: string;
  demopre: number;
  constructor() { }

  // tslint:disable-next-line:align
  ngOnInit() {
  }

  Subnetting(prefijo: number, ip: string, Mask: string, nsubred: number) {
    let ns: number;
    let ban = false;
    const bits: number[] = [128, 64, 32, 16, 8, 4, 2, 1];
    let n: number;
    let bro: number;
    let ii: number;
    let ip81: number;
    let ip82: number;
    let ip83: number;
    let ip84: number;
    let m81: number;
    let m82: number;
    let m83: number;
    let m84: number;
    let ip8;
    let m8;
    let mass = 0;
    let h = 0;
    let hs = 0;
    let pre: number;
    let nmask: string;
    let sa = 0;
    let tam = 0;

    console.log('prefijo: ', prefijo);

    ip8 = ip.split('.', 4);  // se dividen los octetos para procesarlos por partes
    // tslint:disable-next-line:radix
    ip81 = parseInt(ip8[0]);
    // tslint:disable-next-line:radix
    ip82 = parseInt(ip8[1]);
    // tslint:disable-next-line:radix
    ip83 = parseInt(ip8[2]);
    // tslint:disable-next-line:radix
    ip84 = parseInt(ip8[3]);
    // ..............................................
    m8 = Mask.split('.', 4);
    // tslint:disable-next-line:radix
    m81 = parseInt(m8[0]);
    // tslint:disable-next-line:radix
    m82 = parseInt(m8[1]);
    // tslint:disable-next-line:radix
    m83 = parseInt(m8[2]);
    // tslint:disable-next-line:radix
    m84 = parseInt(m8[3]);

    for ( n = 1; Math.pow(2, n) - 2 < nsubred; n++) {
      ns = Math.pow(2, n) - 2;
    }
    ns = 0;
    n = n - 1;
    ns = Math.pow(2, n) - 2;  // numero de subredes calculada
    pre = Number(prefijo) + n;
    if (pre === n) {
      console.log(pre, ',', n);
      ban = true;
    } else {
    this.Npre = pre; }
    tam = nsubred;

    if (ip81 >= 1 && ip81 <= 127) {
      if (ip82 >= 0 && ip82 <= 255) {
        if (ip83 >= 0 && ip83 <= 255) {
          if (ip84 >= 0 && ip84 <= 255) {
            this.clase = 'A';
            if (ban === true) {
              pre = 0;
              pre = 8 + n;
              this.Npre = pre;
            }
          }
        }
      }
    }
    if (ip81 >= 128 && ip81 <= 191) {
      if (ip82 >= 0 && ip82 <= 255) {
        if (ip83 >= 0 && ip83 <= 255) {
          if (ip84 >= 0 && ip84 <= 255) {
            this.clase = 'B';
            if (ban === true) {
              pre = 0;
              pre = 16 + n;
              this.Npre = pre;
            }
          }
        }
      }
    }
    if (ip81 >= 192 && ip81 <= 233) {
      if (ip82 >= 0 && ip82 <= 255) {
        if (ip83 >= 0 && ip83 <= 255) {
          if (ip84 >= 0 && ip84 <= 255) {
            this.clase = 'C';
            if (ban === true) {
              pre = 0;
              pre = 24 + n;
              this.Npre = pre;
            }
          }
        }
      }
    }

    for (let i = 0; i < bits.length; i++) { // calcula la mascara de subred mediante un vector que representa los bits
      if (i < n) {
        mass += bits[i];  // crea el ultimo octeto de la mascara de subred
      } else {
        if (i >= n) {
          h++;    // obtiene el host x subred; aqui aun no resta 2
        }
      }
    }

    if (String(this.clase) === 'A') {
      if (pre <= 8) {
      nmask = mass + '.0.0.0';
      } else {
        if ( pre <= 16) {
          nmask = '255.' + mass + '.0.0';
        } else {
          if (pre <= 24) {
            nmask = '255.255.' + mass + '.0';
          } else {
            if (pre <= 32) {
              nmask = '255.255.255.' + mass;
            }
          }
        }
      }
    } else {
      if (String(this.clase) === 'B') {
        if (pre <= 8) {
          nmask = mass + '.0.0.0';
          } else {
            if ( pre <= 16) {
              nmask = '255.' + mass + '.0.0';
            } else {
              if (pre <= 24) {
                nmask = '255.255.' + mass + '.0';
              } else {
                if (pre <= 32) {
                  nmask = '255.255.255.' + mass;
                }
              }
            }
          }
      } else {
        if (String(this.clase) === 'C') {
          if (pre <= 8) {
            nmask = mass + '.0.0.0';
            } else {
              if ( pre <= 16) {
                nmask = '255.' + mass + '.0.0';
              } else {
                if (pre <= 24) {
                  nmask = '255.255.' + mass + '.0';
                } else {
                  if (pre <= 32) {
                    nmask = '255.255.255.' + mass;
                  }
                }
              }
            }
        }
      }
    }
    let dir2: number;
    let dir1: number;
    this.NMask = nmask;
    sa = 256 - mass;
    hs = Math.pow(2, h) - 2;
    this.idr = new Array(Number(tam));
    this.ran1 = new Array(Number(tam));
    this.ran2 = new Array(Number(tam));
    this.broad = new Array(Number(tam));
    // tslint:disable-next-line:prefer-for-of
    this.idr[0] = String(ip81) + '.' + String(ip82) + '.' + String(ip83) + '.' + String(ip84);

    let dira: number;
    if (this.clase === 'A') {
      ii = sa + ip82;
      dir1 = ip84 + 1;
      dira = 255;
      dir2 = 254;
      bro = hs + 1 + Number(ip82);
    }

    if (this.clase === 'B') {
      ii = sa + ip83;
      dir1 = ip83 + 1;
      dir2 = hs + Number(ip83);
      bro = hs + 1 + Number(ip83);
    }

    if (this.clase === 'C') {
      ii = sa + ip84;
      dir1 = ip84 + 1;
      dir2 = hs + Number(ip84);
      bro = hs + 1 + Number(ip84);
    }
    for (let j = 1; j < this.idr.length; j++) { // obtiene los saltos
      if (String(this.clase) === 'A') {
        if (ip82 >= 0 && ip82 <= 255) {
          this.idr[j] = ip81.toString() + '.' + ii.toString() + '.' + ip83.toString() + '.' +  ip84.toString();
          ii += sa;
        }
      } else {
        if (String(this.clase) === 'B') {
          if (ip83 >= 0 && ip83 <= 255) {
            this.idr[j] = ip81.toString() + '.' + ip82.toString() + '.' + ii.toString() + '.' +  ip84.toString();
            ii += sa;
          }
        } else {
          if (String(this.clase) === 'C') {
            if (ip84 >= 0 && ip84 <= 255) {
              this.idr[j] = ip81.toString() + '.' + ip82.toString() + '.' + ip83.toString() + '.' +  ii.toString();
              ii += sa;
            }
          }
        }
      }
    }
    for (let k = 0; k < this.ran1.length; k++) { // calcula el rango de inicio a fin
      if (String(this.clase) === 'A') {
        if (ip84 >= 0 && ip84 <= 255) {
      } else {
        if (String(this.clase) === 'B') {
          // ...
        } else {
          if (String(this.clase) === 'C') {
            if (ip84 >= 0 && ip84 <= 255) {
              this.ran1[k] = ip81.toString() + '.' + ip82.toString() + '.' + ip83.toString() + '.' +  dir1.toString();
              dir1 += sa;
              this.ran2[k] = ip81.toString() + '.' + ip82.toString() + '.' + ip83.toString() + '.' +  dir2.toString();
              dir2 += sa;
            }
          }
        }
      }
    }

    // tslint:disable-next-line:prefer-for-of
    // obtiene el broadcast
      for (let l = 0; l < this.broad.length; l++) {
      if (String(this.clase) === 'A') {
        // ...
      } else {
        if (String(this.clase) === 'B') {
          // ...
        } else {
          if (String(this.clase) === 'C') {
            if (ip84 >= 0 && ip84 <= 255) {
              this.broad[l] = ip81.toString() + '.' + ip82.toString() + '.' + ip83.toString() + '.' +  bro.toString();
              bro += sa;
            }
          }
        }
      }
    }
    // ..........................
  }
  }
  probar(ip: string) {
    let ip81;
    let ip82;
    let ip83;
    let ip84;
    let ip8;
    this.demoip = ip;

    ip8 = ip.split('.', 4);  // se dividen los octetos para procesarlos por partes
    // tslint:disable-next-line:radix
    ip81 = parseInt(ip8[0]);
    // tslint:disable-next-line:radix
    ip82 = parseInt(ip8[1]);
    // tslint:disable-next-line:radix
    ip83 = parseInt(ip8[2]);
    // tslint:disable-next-line:radix
    ip84 = parseInt(ip8[3]);

    if (ip81 >= 1 && ip81 <= 127) {
      if (ip82 >= 0 && ip82 <= 255) {
        if (ip83 >= 0 && ip83 <= 255) {
          if (ip84 >= 0 && ip84 <= 255) {
            this.clase = 'A';
            this.demoMask = '255.0.0.0';
          }
        }
      }
    }
    if (ip81 >= 128 && ip81 <= 191) {
      if (ip82 >= 0 && ip82 <= 255) {
        if (ip83 >= 0 && ip83 <= 255) {
          if (ip84 >= 0 && ip84 <= 255) {
            this.clase = 'B';
            this.demoMask = '255.255.0.0';
          }
        }
      }
    }
    if (ip81 >= 192 && ip81 <= 233) {
      if (ip82 >= 0 && ip82 <= 255) {
        if (ip83 >= 0 && ip83 <= 255) {
          if (ip84 >= 0 && ip84 <= 255) {
            this.clase = 'C';
            this.demoMask = '255.255.255.0';
          }
        }
      }
    }
    // .......Prefijo..................
    if (this.demoMask === '255.0.0.0') {
      this.demopre = 8;
    } else {
      if (this.demoMask === '255.255.0.0') {
        this.demopre = 16;
      } else {
        if (this.demoMask === '255.255.255.0') {
          this.demopre = 24;
        }
      }
    }
  }
}
