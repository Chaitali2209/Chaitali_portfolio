
import React from 'react';
import './Languages.css'

const Languages = () => {
    const data=[
        {
            title:"Languages",
            contents:["Python","Dart","Node.js","SQL","Javascript"]
        },
        {
            title:"Software",
            contents:["Vscode","Google Colab","Jupyter"]
        },
        {
            title:"Database",
            contents:["PostgresQL","MySQL","MongoDB"]
        },
        {
            title:"Framework",
            contents:["React","Flutter","Express"]
        },
    ]
  return (
    <section id='languages' data-aos='fade'>
        {
            data.map(item=>(
                <div className='languages-box' key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                        {
                            item.contents.map(content=>(
                                <li key={content}>{content}</li>
                            ))
                        }
                    </ul>

                </div>
            ))
        }
    </section>
  )
}

export default Languages
