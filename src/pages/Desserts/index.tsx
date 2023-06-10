import { Head } from "../../components/Head"
import { SnackTitles } from "../../components/SnackTitles"
import { Snacks } from "../../components/Snacks"

export default function IceCreams(){
  const data = [
    {
      id: 1,
      snack: 'Desserts',
      name: 'Cookie Dough',
      description: 'It makes for a fun appetizer or dessert for any party, bridal or baby shower, or a yummy snack to share!  Give it a try!  It is AMAZING!',
      price: 9.75,
      image: 'https://i.imgur.com/bFH4vVe.jpeg',
    },
    {
      id: 2,
      snack: 'Desserts',
      name: 'Snickers Dip',
      description: 'This Snickers Dip is the perfect sweet appetizer to feed a crowd! And well, it’s an easy sweet dip made of Snickers. How can that not be amazing?',
      price: 6.85,
      image: 'https://i.imgur.com/5sjJrIb.jpeg',
    },
    {
      id: 3,
      snack: 'Desserts',
      name: 'Lemon Cream Cheese',
      description: 'The easiest cream cheese fruit dip, this Lemon Cream Cheese Fruit Dip has marshmallow creme and cream cheese, plus lemon yogurt to give it the best lemon flavor.',
      price: 7.10,
      image: 'https://i.imgur.com/yaARGHk.jpeg',
    },
  ]
  return (
    <>
    <Head title='Desserts'/>
    <SnackTitles>Desserts</SnackTitles>
    <Snacks snacks={data}></Snacks>


    </>
  )
}
