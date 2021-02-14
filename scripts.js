            const Modal = {
                open(){
                    // Abrir modal
                    // Adicionar a class active ao modal
                    document
                        .querySelector('.modal-overlay')
                        .classList
                        .add('active')

                },
                close(){
                    // fechar o modal
                    // remover a class active do modal
                    document
                        .querySelector('.modal-overlay')
                        .classList
                        .remove('active')
                }
            }
            
            const transactions = [
            {
                id: 1,
                description: 'Luz',
                amount: -50000,
                date: '23/01/2021',
            },
            {
                id: 2,
                description: 'Website',
                amount: 500000,
                date: '23/01/2021',
            },
            {
                id: 3,
                description: 'Internet',
                amount: -20000,
                date: '23/01/2021',
            },
                        {
                id: 4,
                description: 'App',
                amount: 200000,
                date: '23/01/2021',
            },
            
                
                
                ]
            
            const Transaction = {
                income(){
                    //somar entradas
                },
                expense(){
                    //somar saídas
                },
                total(){
                    //entradas-saídas
                }
            }
            
            const DOM ={
                transactionsContainer: document.querySelector('#data-table tbody'),
                addTransaction(transaction, index){
                    console.log(transaction)
                    const tr =document.createElement('tr')
                    tr.innerHTML = DOM.innerHTMLTransaction(transaction)
                    DOM.transactionsContainer.appendChild(tr)
                    
                    console.log(tr.innerHTML)
                },
                innerHTMLTransaction(transaction){
                    const CSSclass = transaction.amount > 0 ? "income":
                    "expense" 
                   
                    const html=` <tr>
                            <td class="description">${transaction.description}</td>
                            <td class="${CSSclass}">${transaction.amount}</td>
                            <td class="date">${transaction.date}</td>
                            <td>
                                <img src="./assets/minus.svg" alt="Remover transação">
                            </td>
                        </tr>
                        `
                        return html
                }
            }
            
            transactions.forEach(function(transaction){
                DOM.addTransaction(transaction)
            })