using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ggj2018
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("class Breaker() starting...");
            Console.WriteLine("......");
            Console.WriteLine("Connecting....");
            Console.WriteLine("..............");
            Console.WriteLine("Ip found");
            Console.WriteLine("breaker.takeOver.exe failed to run...");
            Console.WriteLine("breaker.breakIn.exe failed to run...");
            Console.WriteLine("breaker.peek.exe Successfull...");
            Console.WriteLine("............");
            Console.WriteLine("............");
            Console.WriteLine("............");
            Console.WriteLine("............");
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            Console.WriteLine("Welcome, Dr. Ryson...");
            Console.WriteLine("Please Enter Your Password:");
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("Detecting Hash...");
            Console.WriteLine("Password Encrypted...");
            Console.WriteLine("Outputting Encryption...");
            Console.WriteLine("Input Decrypted Password:");
            string a = Console.ReadLine();

            if (a == "penis")
            {
                Console.ForegroundColor = ConsoleColor.DarkYellow;
                Console.WriteLine("Password Correct");
                Console.WriteLine("Accessing");
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.DarkYellow;
                Console.WriteLine("Password Incorrect");
                //new change
            }
        }
    }
}
