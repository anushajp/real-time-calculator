# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import swampdragon.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Calculation',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('to_calculate', models.TextField()),
                ('answer', models.IntegerField()),
            ],
            bases=(swampdragon.models.SelfPublishModel, models.Model),
        ),
    ]
