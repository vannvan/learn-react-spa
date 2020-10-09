import React from 'react'
import Card from '@/components/Card'
export default function() {
  const data = [
    {
      id: 1,
      name: "子君",
    },
    {
      id: "2",
      name: "张三",
    },
    {
      id: "3",
      name: "李四",
    },
  ];

  return (
    <div>
      <ul>
        {
        data.map((item,index) => {
          return <Card key={item.id} renderTitle= {
                    () => {
                        return <span>{item.name}</span>
                    }
                }>
            content - {index}
        </Card>
        })
      }
      </ul>
    </div>
  )
}
