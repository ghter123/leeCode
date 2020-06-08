using System;
using System.Collections.Generic;
using System.Linq;

namespace TopN
{
    class Book
    {
        public decimal Price { get; set; }
        public string Name { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var n = 2;
            var books = new List<Book>
            {
                new Book
                {
                    Name="book1",
                    Price = 100
                },
                new Book
                {
                    Name = "book2",
                    Price = 110
                },
                new Book
                {
                    Name = "book3",
                    Price = 120
                },
                new Book
                {
                    Name = "book4",
                    Price = 120
                },
                new Book
                {
                    Name = "book5",
                    Price = 110
                }
            };

            var priceHighestBooks = new MinHeap<Book>(books.Take(n), n, (node1, node2) =>
            {
                return node1.Price > node2.Price;
            });

            foreach (var book in books.Skip(n))
            {
                if (priceHighestBooks.Min.Price < book.Price)
                {
                    priceHighestBooks.InsteadMin(book,0);
                }
            }

            Console.WriteLine("Hello World!");
        }
    }

    class MinHeap<T>
    {
        private readonly T[] Nodes;
        private readonly Func<T, T, bool> IsGreater;
        private readonly int N;

        public MinHeap(IEnumerable<T> nodes, int n, Func<T, T, bool> func)
        {
            Nodes = new T[n];
            IsGreater = func;
            N = n;
            var i = 0;
            foreach (var node in nodes)
            {
                Nodes[i] = node;
                var j = i;
                while (j / 2 > 0)
                {
                    if (IsGreater(Nodes[j / 2], Nodes[j]))
                    {
                        Swap(j / 2, j);
                        j = j / 2;
                    }
                }
                i++;
            }
        }

        public T Min { get { return Nodes[0]; } }

        public void InsteadMin(T node, int nodeIndex)
        {
            Nodes[nodeIndex] = node;
            var i = nodeIndex;

            if (2 * i + 1 < N && IsGreater(Nodes[i], Nodes[2 * i + 1]))
            {
                Swap(i, 2 * i + 1);
                InsteadMin(node, 2 * i + 1);
            }

            if (2 * i + 2 < N && IsGreater(Nodes[i], Nodes[2 * i + 2]))
            {
                Swap(i, 2 * i + 2);
                InsteadMin(node, 2 * i + 2);
            }
        }

        private void Swap(int firstIndex, int secondIndex)
        {
            T temp = Nodes[firstIndex];
            Nodes[firstIndex] = Nodes[secondIndex];
            Nodes[secondIndex] = temp;
        }

        public T[] ToArray()
        {
            return Nodes;
        }
    }
}
