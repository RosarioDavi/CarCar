# Generated by Django 4.0.3 on 2022-10-26 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_rest', '0002_alter_vehiclemodel_picture_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobile',
            name='sold',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='automobile',
            name='vin',
            field=models.CharField(max_length=17),
        ),
    ]