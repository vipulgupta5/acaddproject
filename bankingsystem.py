print("Banking Management System")
print("Main menu")
print("01:- NEW ACCOUNT")
print("02:- DEPOSIT ACCOUNT")
print("03:-ALL ACCOUNT HOLDER LIST")
print("04:- WITHDRAW AMOUNT")
print("05:- BALANCE ENQUIRY")
print("06:- CLOSE AN ACCOUNT")
print("07:- MODIFY ON ACCOUNT")
print("08:- EXIT")

banking=int(input("select your option from 1-8 = "))
if banking ==1:
    print("New account deposit form")
    Name=input("Enter your full name = ")
    age=input("enter you date of birth = ")
    mobileno=input("enter your mobile no for linkin it with you account no = ")
    print("your account has been successfully created")

elif banking  ==2:
    print(' deposit form')
    name = input("Enter your full name = ")
    accountno = input("enter your account number in which you want to deposit = ")
    depositamount = input("enter the amount you want to deposit = ")
    print("money has been successfully deposited")

elif banking==3:
    print("Account Holder List")
    print("1:- Aman")
    print("2:- nitish")
    print("3:- arshit")
    print("4:- sahil")
    print("5:- vipul")
    print("6:- Akash")

elif banking==4:
    print(' Withdrawal Form')
    name = input("Enter your full name = ")
    accountno = input("enter your account number in which you want to Withdraw = ")
    Withdrawamount = input("enter the amount you want to Withdraw = ")
    print("money has been successfully withdrawal")

elif banking==5:
    print(' enquiry')
    accountno = input("enter your accont no to check balance = ")
    pin = input("enter the pin to get youy balance status = ")
    print("Your account has 10000 amount")

elif banking==6:
    print("account closure form")
    name = input("enter your full name = ")
    accoutno = input("enter account number = ")
    reason = input("etner reason for account closure = ")
    print("withdrawal all you amount before account closure if done ignore this message")
    print("your account has been succesfully closed ")

elif banking==7:
    print("Account modification Form")
    accountno=int(input("enter the 6 digit account number for modification = "))
    if accountno == 123456:
        print("you are on account modification page")
        print("to edit your name press 1 ")
        print("to edit your age press 2")
        print("to edit your mobile no print 3")
        choice=int(input("enter you choice form 1-3 = "))
        if choice==1:
            print("enter your name")
            newname=input("enter your changed name = ")
            print("name changed successfully")
        elif choice==2:
            print("enter your age")
            newage=input("enter your changed age = ")
            print("Age changed successfully")
        elif choice == 3:
            print("enter your mobile number")
            newage = input("enter your changed mobile number = ")
            print("mobile number changed successfully")
        else:
            print("invalid option")
    # else:
    #     print("invalid account no")

elif banking==8:
    print("you have been exited")

else:
    print("invalid choice")