export interface FirstStepSigning {
    name : string;
    age : number;
}

export interface SecondStepSigning {
    email: string;
    newsletter: 'daily' | 'weekly' | 'monthly';
}

export interface SigningType extends FirstStepSigning, SecondStepSigning {}