function company_API(url, method) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.responseType = 'json';
        request.onload = function () {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error('THERE WAS AN ERROR LOADING DATA ASJFDSAJFGJRG'));
            }
        }
        request.onerror = function () {
            reject(Error('THERE WAS AN INTERNET ERROR (I THINK)'));
        }
        request.send();
    });
}

 function getCompanyName(companies, id) {
    let name;
    try {
        companies.forEach(e => {
            if (id == e.companyId) {
                name = e.name;
            }
        })
    } catch {
        console.log('ERROR AL OBTENER NOMBRE DE COMPANIA');
    }

    return name;
}
/*
function getEmployeesApi() {
    let employees;
    company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
        .then((e) => {
            employees = e;
            console.log(e);   
        })
        .catch((reason) => {
            console.log(Error(reason));
        });
        return employees;
}


function getCompaniesApi(){
    let companies;
    company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company', 'GET')
        .then((c) => {
            companies = c;   
        })
        .catch((reason) => {
            console.log(Error(reason));
        });
        return companies;
}

class Employee{

    constructor(id,companyName,firstName,lastName,email){
        this.id = id;
        this.companyName = companyName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    
}

function carga(employees,companies){
    let employeesWithCompanies;
    try{
        console.log(employees);
        //employees.forEach(e =>{
            //let companyName = getCompanyName(companies,e.companyId);
            //console.log(companyName);
            //employeesWithCompanies.push(new Employee(e.id,companyName,e.firstName,e.lastName,e.email));
        
    }catch{
        console.log('ERROR!!');
    }
    return employeesWithCompanies;
}


// Punto 1
let employees = getEmployeesApi();
let companies = getCompaniesApi();

let employeesWithCompanies = carga(employees,companies); */




company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
    .then((employees) => {
        //console.log(employees);
        company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company', 'GET')
            .then((company) => {
                //console.log(company);
                let p = document.querySelector('p');
                p.textContent = 'LISTADO DE EMPLADOS Y SUS COMPANIAS:';
                employees.forEach(e =>{p.textContent +="Nombre: "+ e.firstName+" "+e.lastName+"  Compania:  "+(getCompanyName(company,e.companyId)+" , ")});

            })
    })
    .catch((reason) => {
        console.log(Error(reason));
    });






/* company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
  .then((employees) => {
      console.log(employees);
      let paragraph = document.querySelector('p');
      paragraph.textContent = 'EMPLOYEE MAILS: ';
      employees.forEach(employee => { paragraph.textContent += employee.name + ", "; });
  })
  .catch((reason) => {
      console.log(Error(reason));
  }); */

/*  company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company', 'GET')
     .then((company) => {
         console.log(company);

         let paragraph = document.querySelector('a');
         paragraph.textContent = 'COMPANIES: ';
         company.forEach(company => {
          paragraph.textContent += company.companyId + ", ";
         });
     })
     .catch((reason2) => {
         console.log(Error(reason2));
     }); */


/*        company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'GET')
           .then((employees) => {
               return company_API('https://utn-lubnan-api-1.herokuapp.com/api/Company', 'GET')
                   .then((companies) => {
                       const companyMap = new Map(companies.map(company => [company.CompanyId, company]));
                       //const companyMap = new Map(companies.CompanyId, company); ASI NO FUNCIONA PERO NO ENTIENDO POR QUE NO
                       const employeesWithCompanies = employees.map(employee => ({
                           EmployeeName: `${employee.firstName} ${employee.lastName}`,
                           CompanyName: companyMap.get(employee.CompanyId)?.name || 'Desconocida'
                       }));

                       return employeesWithCompanies;
                   });
           })
           .then((employeesWithCompanies) => {
               console.log(employeesWithCompanies);

               // Obtén una referencia al elemento de lista (ul)
               let list = document.querySelector('ul');

               // Recorre la lista de empleados con compañías y crea elementos de lista (li) para cada uno
               employeesWithCompanies.forEach(employee => {
                   // Crea un nuevo elemento de lista (li)
                   let listItem = document.createElement('li');

                   // Establece el contenido del elemento de lista con el nombre del empleado y la compañía
                   listItem.textContent = `${employee.EmployeeName} works in ${employee.CompanyName}`;

                   // Agrega el elemento de lista a la lista (ul)
                   list.appendChild(listItem);
               });
           })
           .catch((error) => {
               console.error("Error:", error);
           }); */


/*       company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee/523', 'DELETE')
          .then((employees) => {
                  console.log('se elimno :)');
          })
          .catch((reason) => {
              console.log(Error(reason));
          }); */





/*
company_API('https://utn-lubnan-api-1.herokuapp.com/api/Employee', 'POST')
    .then((response) => {
    })
    .catch((error) => {
        console.error("Error:", error);
        console.log(error);
  
  });
  */
